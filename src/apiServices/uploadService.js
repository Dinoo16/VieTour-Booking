import * as httpRequest from '~/utils/httpRequest';

// Upload image
export const uploadImage = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const res = await httpRequest.post('/admin/uploads', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return res.data;
    } catch (error) {
        console.error('Upload image error:', error);
        throw error;
    }
};
