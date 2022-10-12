import React, {useEffect} from 'react';
import {connect} from "react-redux";
import CollectionReducer,{getcollection} from "../reducers/CollectionReducer";
function Collections({getcollection,CollectionReducer}) {

    useEffect(()=>{
        getcollection()
    },[])

    return (
        <div>
            Collections
        </div>
    );
}

export default connect(CollectionReducer,{getcollection}) (Collections);
