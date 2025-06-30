import DestinationBox from './DestinationBox';
import DaysBox from './DaysBox';
import BudgetBox from './BudgetBox';
import CategoryBox from './CategoryBox';

const boxMapping = [
    (props) => <DestinationBox {...props} />,
    (props) => <DaysBox {...props} />,
    (props) => <CategoryBox {...props} />,
    (props) => <BudgetBox {...props} />,
];

export default boxMapping;
