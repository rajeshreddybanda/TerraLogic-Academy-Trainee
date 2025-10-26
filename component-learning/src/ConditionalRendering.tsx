import React from 'react';  


type IProps = {
    isLoggedIn : boolean;
    defaultProp?: boolean;
};

const ConditionalRendering = (props:IProps) =>{
    const{isLoggedIn, defaultProp = "No Val fromParent"} =props;
    console.log ("defaultProp",defaultProp);

    const checkIfUserHasAccount = (hasAccount: boolean) => {

        if(hasAccount) 
            return <h1> User can login</h1>;
        return <h1> User Need Regisetr</h1>;
    };
    return (
        <div>
            {isLoggedIn ? 
               <h1> yes , can login</h1>: checkIfUserHasAccount (false) }  
         </div>
            );
        };
export default ConditionalRendering;