import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { peRequestState } from '../atoms/peRequestState';
import { reviewersState } from '../atoms/reviewersState';
import useVanillaQuery from '../../../../../nirmata-lego/connectors/use-vanilla-query';
import TPolicyExceptionRequest from '../../../../../nirmata-model-schema/Policies.TPolicyExceptionRequest';
import TUser from '../../../../../nirmata-model-schema/Users.TUser';
import { useGetCurrentUserCache } from '../../../../recoil/globalCache';
import { userMfaState } from '../atoms/userMfaState';

const InitAtomStates = () => {
  const { peRequestId } = useParams<{ peRequestId: string }>();

  const currentUserData = useGetCurrentUserCache();
  const currentUserId = currentUserData?.id;

  const setPERequestState = useSetRecoilState(peRequestState);
  const setReviewersData = useSetRecoilState(reviewersState);
  const serUserMfaState = useSetRecoilState(userMfaState);

  const onLoadPERequest = useVanillaQuery<TPolicyExceptionRequest>();
  const onLoadCurrentUserInfo = useVanillaQuery<TUser>();
  const onLoaUserMFAUri = useVanillaQuery<{ policyExceptionMfaUri: string }>();

  const loadPERequestData = async () => {
    onLoadPERequest(`/policies/api/PolicyExceptionRequest/${peRequestId}`)
      .then((res) => {
        setPERequestState({ loading: false, data: res?.data });

        const initialReviewers = res?.data?.approvalInfo ?? [];
        setReviewersData({ loading: false, data: initialReviewers });
      })
      .catch((e) => {
        console.error(e, `Error loading PolicyExceptionRequest for ${peRequestId}`);
      });
  };

  const loadCurrentUserMFAData = async () => {
    const fields = ['id', 'policyExceptionApprovalMfa', 'policyExceptionApprovalFirstLoginAfterMfaEnable'];
    serUserMfaState({ loading: true, data: {} });

    onLoadCurrentUserInfo(`/users/api/User/${currentUserId}?fields=${fields.join(',')}`)
      .then(async (userRes) => {
        return onLoaUserMFAUri(`/users/api/User/${currentUserId}/getPolicyExceptionApprovalMfaUri`).then((uriRes) => {
          const mfaUri = uriRes?.data?.policyExceptionMfaUri ?? '';
          const finalData: TUser = { ...userRes?.data, policyExceptionApprovalMfaUri: mfaUri };

          serUserMfaState((prevState) => ({ ...prevState, data: finalData }));
        });
      })
      .catch((e) => {
        console.error(e, `Error loading User's MFA info from user service`);
      });
  };

  useEffect(() => {
    if (!peRequestId) return;

    loadPERequestData();

    return () => {
      setPERequestState({ loading: true, data: {} });
      setReviewersData({ loading: true, data: [] });
    };
  }, [peRequestId]);

  useEffect(() => {
    if (!currentUserId) return;

    loadCurrentUserMFAData();

    return () => {
      serUserMfaState({ loading: false, data: {} });
    };
  }, [currentUserId]);

  return <></>;
};

export default InitAtomStates;
