import { setFlagsFromString } from 'v8';
import { sponsorInfo } from '../../../public/data/data';
//@ts-ignore
export default function SponsorModal(props: { sponsorInfo: sponsorInfo | null; setFalse: any }) {
  if (props.sponsorInfo === null) {
    return (
      <div>
        <h1>Error no sponsor selected!</h1>
      </div>
    );
  }
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => {
        props.setFalse();
      }}
    >
      <div className="bg-[#3977f8] mx-[10vw] py-10 rounded-xl overflow-auto flex flex-col items-center justify-center w-[800px]">
        <a className="m-10" href={props.sponsorInfo.href}>
          <img src={`./${props.sponsorInfo.svg}`} alt={props.sponsorInfo.alt} />
        </a>
        <h3 className="mx-10 py-10">{props.sponsorInfo.description}</h3>
        <button
          onClick={props.setFalse}
          className="bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[70%] xl:h-12 h-10"
        >
          close
        </button>
      </div>
    </div>
  );
}
