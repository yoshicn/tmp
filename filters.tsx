import { Select, Button } from '../../../../../nirmata-lego/components/nirmata-v2';
import { FormComponents } from '../../styled-components';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { TargetSelector } from '../types';
import AntForm from '../../../../../nirmata-lego/components/form';
import { FormInstance, FormListFieldData } from 'antd';
import { useGetClusterOptions } from '../utils/useGetClusterOptions';
import { TformTargetSelctors, removeDuplicates } from '../utils';
import { useGetNamespacesCache } from '../../../../recoil/globalCache';
import { useMemo } from 'react';

type FilterRowProps = {
  field: FormListFieldData;
  handleAddRow: () => void;
  handleRemoveRow: (index: number | number[]) => void;
  onFilterChange: (value: TargetSelector) => void;
  form?: FormInstance<any>;
};

export const FilterRow = ({ field, handleRemoveRow, handleAddRow, form }: FilterRowProps) => {
  const { key, name, ...restfield } = field;
  const namespaceCache = useGetNamespacesCache();
  const { targetSelectors } = form?.getFieldsValue();
  const typedTargetSelectors = targetSelectors as TformTargetSelctors[];
  const namespaceFilterOptions = useMemo(
    () =>
      removeDuplicates(
        namespaceCache
          ?.filter((item) => !typedTargetSelectors?.map((name) => name?.namespace)?.includes(item?.name ?? ''))
          ?.map((v) => ({ label: v?.name ?? '', value: v?.name ?? '' })) ?? []
      ),
    [namespaceCache, typedTargetSelectors]
  );
  const { clusterFilterOptions, getClusterList } = useGetClusterOptions(namespaceFilterOptions?.[0]?.label);

  return (
    <div key={key}>
      <FormComponents.SelectBlock>
        <AntForm.Item
          {...restfield}
          name={[name, 'namespace']}
          rules={[{ required: true, message: 'Namespace field is required!' }]}
        >
          <Select
            onChange={(value) => {
              form?.setFieldValue(
                'targetSelectors',
                targetSelectors?.map((item: any, index: number) => {
                  if (index === name) {
                    return {
                      namespace: value,
                      clusterList: []
                    };
                  } else {
                    return item;
                  }
                })
              );
              getClusterList(value);
            }}
            style={{ width: '300px' }}
            options={[...namespaceFilterOptions]}
            placeholder='Select namespace'
          />
        </AntForm.Item>
        <span style={{ marginBottom: '2rem' }}> In </span>
        <AntForm.Item
          {...restfield}
          name={[name, 'clusterList']}
          rules={[{ required: true, message: 'Cluster field is required!' }]}
        >
          <Select
            mode='multiple'
            style={{ width: '300px' }}
            onChange={() => {
              console.log('form:', form?.getFieldsValue());
            }}
            options={[...(clusterFilterOptions ?? [])]}
            placeholder='Select Clusters'
          />
        </AntForm.Item>
        <div className='form-select-btn' style={{ marginBottom: '2rem' }}>
          <Button
            shape='circle'
            onClick={() => {
              handleAddRow();
            }}
            icon={<PlusOutlined style={{ width: '10px', height: '10px' }} />}
          />
          {((targetSelectors as TformTargetSelctors[])?.length ?? 0) > 1 && (
            <Button
              shape='circle'
              onClick={() => handleRemoveRow(name)}
              icon={<MinusOutlined style={{ width: '10px', height: '10px' }} />}
            />
          )}
        </div>
      </FormComponents.SelectBlock>
    </div>
  );
};
