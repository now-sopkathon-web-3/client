import RecordResult from '@components/record/RecordResult';
import FailImg from 'src/pages/record/img_failure_babal@3x.png';

const FailPage = () => {
  return (
    <>
      <RecordResult
        src={FailImg}
        alt="fail Img"
        content={`솔직하게 기록한 당신! 괜찮아요~\n맛있으면 0k니까! 내일부터 다시 시작!!`}
      />
    </>
  );
};

export default FailPage;
