const nodemailer=require("nodemailer")
require("dotenv").config();

const SendEnquiry=async(req,res)=>{
    const { Name, EmailId, Contact,Address,Product,Enquiry } = req.body;
    console.log(EmailId)

    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.APP_PASSWORD
        },
    });
    
    // Email options
    let mailOptions = {
        from: `${EmailId}`,
        to: `${EmailId}`,
        subject: 'New Enquiry',
        text: `Name: ${Name}\nEmail: ${EmailId}\nContact No.: ${Contact}\nAddress: ${Address}\nProduct: ${Product}\nEnquiry: ${Enquiry}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
}

module.exports={SendEnquiry}
