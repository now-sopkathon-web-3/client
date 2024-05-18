import RecordResult from '@components/record/RecordResult';
import SuccessImg from 'src/pages/record/img_success_babal@3x.png';

const SuccessPage = () => {
  return (
    <>
      <RecordResult src={SuccessImg} alt="fail Img" content={`오늘도 목표를 이룬 당신!\n앞으로도 꾸준히 할 수 있죠?`} />
    </>
  );
};

export default SuccessPage;
