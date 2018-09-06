import React from "react";
import PropTypes from "prop-types";

function Comments(props) {
    let commentDivs = props.comments.map(commen => {
        return <div>{comment}</div>;
    });
    return <div>{commentDivs}</div>;
}
Comments.propTypes = {
    comments: PropTypes.array.isRequired
};




// function Comments(props) {
//   return ( 
//     <div className="col-lg-3 col-md-6">
//       <div className="panel panel-primary">
//           <div className="panel-heading">
//               <div className="row">
//                   <div className="col-xs-3">
//                       <i className="fa fa-comments fa-5x"></i>
//                   </div>
//                   <div className="col-xs-9 text-right">
//                       <div className="huge">{props.newComments}</div>
//                       <div>New Comments!</div>
//                   </div>
//               </div>
//           </div>
//           <a href="#">
//               <div className="panel-footer">
//                   <span className="pull-left">View Details</span>
//                   <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
//                   <div className="clearfix"></div>
//               </div>
//           </a>
//       </div>
//     </div>);
// }

export default Comments;
