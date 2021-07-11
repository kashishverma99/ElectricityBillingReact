import ListConsumerComponent from './components/Consumer/ListConsumerComponent';
import UpdateConsumerComponent from './components/Consumer/UpdateConsumerComponent';
import ViewConsumerComponent from './components/Consumer/ViewConsumerComponent';
import CreateConsumerComponent from './components/Consumer/CreateConsumerComponent';
import CustomerPasswordResetComponent from './components/Customer/CustomerPasswordResetComponent';
import HeaderComponent from './components/Layouts/HeaderComponent';
import FooterComponent from './components/Layouts/FooterComponent';
import HomeComponent from './components/HomeComponent';
import ContactUs from './components/ContactUs';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SupervisorDashboard from './components/Dashboards/SupervisorDashboard';
import AddComplaint from "./components/Complaint/AddComplaint";
import ComplaintDashboard from "./components/Complaint/ComplaintDashboard";
import UpdateComplaint from "./components/Complaint/UpdateComplaint";
import ViewComplaint from "./components/Complaint/ViewComplaint";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ValidateConsumerComponent from './components/ValidateConsumerComponent';
import { connectAdvanced, Provider } from 'react-redux';
import store from './store';
import CustomerLogin from './components/Customer/CustomerLogin';
//import { connect } from "react-redux";
import AddBills from "./components/Bills/AddBills";
import BillDashboard from "./components/Bills/BillDashboard";
import UpdateBill from "./components/Bills/UpdateBill";
import ViewBill from "./components/Bills/ViewBill";
import AddPayment from './components/payment/AddPayment';
import ViewPayment from './components/payment/ViewPayment';
import PaymentDashboard from './components/payment/PaymentDashboard';
//import ValidateConsumerComponent from './components/Registration/ValidateConsumerComponent';
import ValidateConsumerComponent from './components/Registration/ValidateConsumerComponent ';
import UserDashboard from './components/Dashboards/UserDashboard';
import LoginComponent from './components/Supervisor/LoginComponent';
import AddCustomer from './components/Customer/AddCustomer';
import PasswordResetComponent from './components/Supervisor/PasswordResetComponent';
import AdminLogin from './components/Admin/AdminLogin';
import Thankyou from './components/Complaint/Thankyou';
import ThankyouBill from './components/Bills/ThankyouBill';
//import AdminDashboard from './components/Dashboards/AdminDashboard';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <HeaderComponent />

          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/BillDashboard" component={BillDashboard} />
              <Route path='/contactUs' component={ContactUs} />
              <Route exact path="/addBill" component={AddBills} />
              <Route exact path="/SupervisorLogin" component={LoginComponent} />
              <Route exact path="/CustomerLogin" component={CustomerLogin} />
              <Route exact path="/updateBill/:billId" component={UpdateBill} />
              <Route exact path="/viewBill/:billId" component={ViewBill} />
              <Route exact path="/addPayment" component={AddPayment} />
              <Route exact path="/PaymentDashboard" component={PaymentDashboard} />
              <Route exact path="/UserDashboard" component={UserDashboard} />
              <Route exact path="/viewPayment/:paymentId" component={ViewPayment} />
              <Route path="/validate-consumer" component={ValidateConsumerComponent}></Route>
              <Route exact path="/ComplaintDashboard" component={ComplaintDashboard} />
              <Route exact path="/ThankyouC" component={ThankyouBill} />
              <Route exact path="/addComplaint" component={AddComplaint} />
              <Route exact path="/UpdateComplaint/:complaint_no" component={UpdateComplaint} />
              <Route exact path="/ViewComplaint/:complaint_no" component={ViewComplaint} />
              <Route exact path="/SupervisorDashboard" component={SupervisorDashboard} />
              <Route path="/add" exact component={AddCustomer}></Route>
              <Route path="/reset-password" exact component={CustomerPasswordResetComponent}></Route>
              <Route path="/reset" exact component={PasswordResetComponent}></Route>
              <Route path="/AdminLogin" exact component={AdminLogin}></Route>
              <Route path='/getAllConsumer' component={ListConsumerComponent} />
              <Route path='/add-consumer/_add' component={CreateConsumerComponent} />
              <Route path='/update-consumer/:consumerId' component={UpdateConsumerComponent} />
              <Route path='/view-consumer/:consumerId' component={ViewConsumerComponent} />
              <Route path='/AdminDashboard' component={AdminDashboard} />
            </Switch>
          </div>

          <FooterComponent />
        </Router>
      </div>
    </Provider>

  );
}
export default App;