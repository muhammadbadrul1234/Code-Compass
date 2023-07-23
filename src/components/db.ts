import mongoose,{connect} from 'mongoose';

function connects() {
    return connect(
      "mongodb+srv://admin:<admin>@cluster0.btzfo7c.mongodb.net"
    ).then(() => console.log("Connected to MongoDB"))
        .catch((error:any) => console.log("Failed to connect to MongoDB", error));
}

export default connects;