const logout = (req, res) => {
    try{
        if(!req.cookies.token){
            return res.status(400).json({error: "no token found"});
        }

        //clear the token cookie
        res.clearCookie("token");

        //respond with success message
        return res.status(200).json({
            message:"logout Successfully",
            success:true    
        });
    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
};

export default logout;