import React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";

function TasksPanel(props) {
  return (  <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
                </div>
                <div className="panel-body">
                    <div className="list-group">
                      {
                        props.tasks.map(function (t,i) {
                          return <TaskItem key={i} task={t} />;
                        })
                      }
                        
                    </div>
                    <div className="text-right">
                        <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
          </div>
        );
}

function mapStateToProps(state) {
  return {
    //info is the name of the prop to put something in
    //.tweets is the name of the reducer that we are getting data from
    tasks: state.tasks
  };
}

const tasks=connect(mapStateToProps)(TasksPanel) 

export default tasks;
// import React from "react";
// import TaskItem from "./TaskItem";
// function TasksPanel(props) {
//   return (  <div className="panel panel-default">
//                 <div className="panel-heading">
//                     <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
//                 </div>
//                 <div className="panel-body">
//                     <div className="list-group">
//                       {
//                         props.tasks.map(function (t,i) {
//                           return <TaskItem key={i} task={t} />;
//                         })
//                       }
                        
//                     </div>
//                     <div className="text-right">
//                         <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
//                     </div>
//                 </div>
//           </div>
//         );
// }

// export default TasksPanel;
