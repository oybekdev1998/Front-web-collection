import React, {useEffect} from 'react';
import {connect} from "react-redux";
<<<<<<< HEAD
import CollectionReducer, {getcollection} from "../reducers/CollectionReducer";

=======
import CollectionReducer,{getcollection} from "../reducers/CollectionReducer";
>>>>>>> 83e94296b7aef0d96ff0d579cba22d7302ec99ac
function Collections({getcollection,CollectionReducer}) {

    useEffect(()=>{
        getcollection()
<<<<<<< HEAD
    }, [getcollection])
=======
    },[])
>>>>>>> 83e94296b7aef0d96ff0d579cba22d7302ec99ac

    return (
        <div>
            Collections
        </div>
    );
}

export default connect(CollectionReducer,{getcollection}) (Collections);
