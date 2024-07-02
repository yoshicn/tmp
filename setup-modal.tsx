import { Flex, Form, Input, Modal, QRCode } from 'antd';
import WarningOutlined from '@ant-design/icons/WarningOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalStateAtom } from '../atoms/modalState';
import { Text, nirmataColors } from '../../../../../nirmata-lego/components/nirmata-v2';
import { useGetCurrentUserCache } from '../../../../recoil/globalCache';
import { userMfaState } from '../atoms/userMfaState';
import useVanillaQuery from '../../../../../nirmata-lego/connectors/use-vanilla-query';
import usePostFormData from '../hooks/usePostFormData';

const SetupMFAModal = () => {
  const [form] = Form.useForm<any>();

  const onValidateMfaToken = useVanillaQuery<any>();
  const { onPostFormData, getFormPayload } = usePostFormData();

  const currentUserData = useGetCurrentUserCache();
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const userMfaStateData = useRecoilValue(userMfaState);

  const onClose = () => {
    setModalState({ open: null, loading: null });
  };

  const handleApprove = async () => {
    const payload = getFormPayload();
    const finalApprovalInfo = [] as any;

    payload.approvalInfo.forEach((info: any) => {
      if (info.approver.id === currentUserData?.id) finalApprovalInfo.push({ ...info, approvalState: 'approved' });
      else finalApprovalInfo.push(info);
    });
    payload.approvalInfo = finalApprovalInfo;

    await onPostFormData(payload, 'approve');
  };

  const handleOk = () => {
    setModalState((prevState) => ({ ...prevState, loading: 'setupMFA' }));

    form.validateFields().then(async (values) => {
      onValidateMfaToken(
        `/users/api/users/${currentUserData?.id}/verifyPolicyExceptionApprovalMfaToken?verificationCode=${values.verificationCode}`
      )
        .then(async () => {
          await handleApprove();
          onClose();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            form.setFields([
              {
                name: 'verificationCode',
                errors: ['Verification failed - incorrect token']
              }
            ]);
          }
        })
        .finally(() => setModalState((prevState) => ({ ...prevState, loading: null })));
    });
  };

  return (
    <Modal
      destroyOnClose={true}
      title={
        <Flex align='center' gap={10} style={{ margin: '5px 0 5px 20px' }}>
          <WarningOutlined style={{ fontSize: '20px', color: nirmataColors.colorOrange }} />
          <Text.Default styles={{ fontSize: '16px', fontWeight: 600 }}>
            Approval requires Multi-Factor Authentication
          </Text.Default>
        </Flex>
      }
      open={modalState.open === 'setupMFA'}
      onOk={handleOk}
      okText='Verify'
      confirmLoading={modalState.loading === 'setupMFA'}
      onCancel={onClose}
    >
      <Flex vertical gap='10px' align='center' style={{ margin: '10px 25px 10px 50px' }}>
        <Text.Default>
          Enter the Multi-Factor Authentication token for this QR code for: {currentUserData?.email}
        </Text.Default>
        <QRCode
          style={{ width: '250px', height: '250px' }}
          value={userMfaStateData.data?.policyExceptionApprovalMfaUri ?? '-'}
        />
        <Form
          style={{ width: '100%' }}
          form={form}
          name='Setup_Mfa_Form'
          layout='vertical'
          initialValues={{}}
          autoComplete='off'
        >
          <Form.Item
            rules={[
              { required: true, message: 'Please enter a valid token' },
              {
                min: 6,
                message: 'Token must be of 6 digits'
              },
              {
                max: 6,
                message: 'Token cannot contain more than 6 digits'
              }
            ]}
            name='verificationCode'
            style={{ margin: 0 }}
          >
            <Input placeholder='Enter your 6 digit token' prefix={<LockOutlined />} />
          </Form.Item>
        </Form>
      </Flex>
    </Modal>
  );
};
