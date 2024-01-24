import If, {Else} from "./if";


interface Usertype{
    name: string
};
interface UserInfoProps{
    user?: Usertype
};


const UserInfo: React.FC<UserInfoProps> = (props) =>{
    return(
        <div>
            <If test={props.user && props.user.name}>
                Seja bem vindo usuario {props.user?.name}
                <Else>
                    Seja bem vindo anonimo
                </Else>
            </If>
        </div>
    )
}


export default UserInfo;