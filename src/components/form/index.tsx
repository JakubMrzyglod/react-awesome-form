import { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormProps } from './types';

export const Form: FC<FormProps> = ({ submit, children, ...useFormProps }) => {
  const methods = useForm(useFormProps);
  const onSubmit = methods.handleSubmit(submit);
  return (
    <FormProvider {...methods}>
      <form {...{ onSubmit }}>{children}</form>
    </FormProvider>
  );
};
