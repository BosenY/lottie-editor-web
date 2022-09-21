// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { zip2json } from 'lottie-zip';
import formidable from 'formidable';
export const config = {
    api: {
        bodyParser: false
    }
}
export default function handler(req, res) {
    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields, files) => {
        console.log(files.zip.filepath, 222)
        const lottieJSON = await zip2json(files.zip.filepath);
        console.log(333, lottieJSON)
        return res.status(200).json({ json: lottieJSON?.[0] })
    })

}
