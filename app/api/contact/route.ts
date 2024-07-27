import { sendEmail } from "@/utils/mail";


export async function POST(
  req: Request, res: any
) {

  const body = await req.json()
  const { name, email, message }  = body;

  console.log(name, email, message)

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const sender  = {name , address :email }

  try {
    const result = await sendEmail({
      sender,
      subject: `رسالة من  ${name}- فخم البن`,
      message ,
      receipients: [{ name: "فخم البن", address: "fkhmalbn@gmail.com" }]
    })

    return Response.json({
      accepted : result.accepted 
    })
  } catch (error) {
    return Response.json({message : "unable to send email this time"})
  } 

  
}
