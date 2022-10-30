import { ThreeDots } from 'react-loader-spinner';
import { Load } from './Loader.styled';
const threeDots = (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#3f51b5"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);
export const Loader = () => {
  return <Load>{threeDots}</Load>;
};
