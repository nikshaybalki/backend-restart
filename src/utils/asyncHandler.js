const asyncHandler = (requestHandler) => {
    (res, req, next) => {
        Promise.resolve(requestHandler(res, req, next)).catch((err) => next(err))
    }
}





export { asyncHandler }


//  TRY CATCH APPROACH

//  const asyncHandler =(fn)=> async(req,res,next)=>{
//     try{
//            await fn(res,req,next)
//     }catch(error){
//             res.status(err.code || 500).json({
//                 success:false,
//                 message:err.message
//             })
//     }
//  }
