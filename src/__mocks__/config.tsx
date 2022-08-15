import { mount, ReactWrapper } from 'enzyme'

// eslint-disable-next-line
export const mountWithConfig = <PropsType extends unknown>(
  component: JSX.Element
): ReactWrapper<PropsType> => mount<PropsType>(component)
