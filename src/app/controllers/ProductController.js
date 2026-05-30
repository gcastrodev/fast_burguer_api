import Yup from 'yup';


class ProductController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category: Yup.string().required()
        })

        try {
            schema.validateSync(request.body, { abortEarly: false, strict: true });
        } catch (err) {
            console.log(err);
            return response.status(400).json({ error: err.errors });
        }


        const { name, price, category } = request.body;

        

        return response.status(201).json({ ok: true });
    }
}

export default new ProductController();