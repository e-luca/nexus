import { Tooltip } from 'react-tooltip';
import { FaCircleInfo } from 'react-icons/fa6';
import './InfoTooltip.css';

type InfoTooltipProps = {
  content: string;
};

const InfoTooltip = ({ content }: InfoTooltipProps) => {
  const InfoIcon = FaCircleInfo as any;
  return (
    <div>
      <InfoIcon
        className="info-icon"
        data-tooltip-id="search-info-tooltip"
        data-tooltip-content={content}
      />
      <Tooltip id="search-info-tooltip" place="top" />
    </div>
  );
};

export default InfoTooltip;
