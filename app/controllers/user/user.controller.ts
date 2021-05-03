const findAll = async(req,res)=>{
    try {
        const users = [
            {
                name:"xxxx"
            },
            {
                name:"test"
            }
        ]
        return res.status(200).json({data:users})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"INTERNAL SERVER ERROR"})

    }
}


export {
    findAll
}