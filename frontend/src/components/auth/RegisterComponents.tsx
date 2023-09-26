import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGetUserQuery } from "../../store/reducers/userSlice";

import FooterComponents from "../layouts/FooterComponents";
import HeaderComponents from "../layouts/HeaderComponents";
import { useEffect } from "react"; 
const registerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    confirm_password: yup.string().oneOf([yup.ref("password"), null]).required(),
});



function RegisterComponents() {
    const { data } = useGetUserQuery();

    useEffect(() => {
        console.log(data);
    });


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmitHandler = (data:any) => {
        console.log(data);
        reset();
    }

    return (
        <>
            <HeaderComponents />
            <div className="container mt-3 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Register</h1>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className="form-group mb-2">

                                <input {...register("name")}
                                    placeholder="enter name" className="form-control" type="text" />
                                <p style={{ color: "red" }}>{errors.name?.message}</p>
                            </div>
                            <div className="form-group mb-2">
                                <input {...register("email")}
                                    placeholder="email" className="form-control" type="email" />
                                <p style={{ color: "red" }}>{errors.email?.message}</p>
                            </div>
                            <div className="form-group mb-2">
                                <input {...register("password")}
                                    placeholder="password" className="form-control" type="password" />
                                <p style={{ color: "red" }}>{errors.password?.message}</p>
                            </div>
                            <div className="form-group mb-2">
                                <input {...register("confirm_password")}
                                    placeholder="password" className="form-control" type="password" />
                                <p style={{ color: "red" }}>{errors.confirm_password?.message}</p>
                            </div>






                            <button type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>


            <FooterComponents />

        </>

    )
}

export default RegisterComponents;