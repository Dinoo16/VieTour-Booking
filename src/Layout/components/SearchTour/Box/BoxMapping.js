import DestinationBox from './DestinationBox';
import DaysBox from './DaysBox';
import BudgetBox from './BudgetBox';
import CalendarBox from './CalendarBox';

const boxMapping = [
    (props) => <DestinationBox {...props} />,
    (props) => <DaysBox {...props} />,
    (props) => <CalendarBox {...props} />,
    (props) => <BudgetBox {...props} />,
];

export default boxMapping;
