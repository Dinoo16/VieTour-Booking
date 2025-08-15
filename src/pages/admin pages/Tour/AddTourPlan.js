import TextInput from '../components/Input/TextInput';
import TextareaField from '../components/Input/TextareaField';
import Form from '../components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTour } from '~/hooks/useTours';
import { useCreateTourPlans } from '~/hooks/useTourPlans';

function AddTourPlan() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: tourData } = useTour(id);

    const [numDuration, setNumDuration] = useState(0);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        if (tourData?.duration) {
            const num = parseInt(tourData.duration, 10);
            setNumDuration(num);

            // Khởi tạo mảng rỗng để admin nhập dữ liệu
            const initialPlans = Array.from({ length: num }, (_, i) => ({
                tourId: parseInt(id),
                day: i + 1,
                title: '',
                content: '',
            }));
            setPlans(initialPlans);
        }
    }, [tourData, id]);

    const createTourPlans = useCreateTourPlans();

    const handleChange = (index, field, value) => {
        setPlans((prev) => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // call api
        createTourPlans.mutate(plans, {
            onSuccess: () => {
                navigate('/admin/tour');
            },
        });
    };
    return (
        <Form title="Add Tour Plan" onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '56px', marginTop: '24px' }}>
                {plans.map((plan, index) => (
                    <div key={plan.day} style={{ width: '100%' }}>
                        <h4>Day {plan.day}</h4>
                        <TextInput
                            label="Title"
                            placeholder="Title"
                            value={plan.title}
                            onChange={(e) => handleChange(index, 'title', e.target.value)}
                        />
                        <TextareaField
                            label="Content"
                            placeholder="Enter content..."
                            value={plan.content}
                            onChange={(e) => handleChange(index, 'content', e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </Form>
    );
}

export default AddTourPlan;
