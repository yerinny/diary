import React, { Component } from 'react';
import '../styles/faq.css';
import { Link } from 'react-router-dom';


class Faq extends Component {
    render() {
      return (
        <div class="container">
    <br />

    <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        This is FAQ page. If you cannot find an answer to your question, make sure to contact us at <strong>yerinlee90@gmail.com</strong>
    </div>

    <Link to="/login"> &#171; Back</Link>
    <div className="panel-group" id="accordion">
        <div className="faqHeader">General questions</div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Is account registration required?</a>
                </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse in">
                <div class="panel-body">
                    Account registration is not needed, please log-in with one of the following...
                </div>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">Anyone can post?</a>
                </h4>
            </div>
            <div id="collapseTen" className="panel-collapse collapse">
                <div class="panel-body">
                   Yes, there is no restriction.
                </div>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Privacy Concern?</a>
                </h4>
            </div>
            <div id="collapseEleven" className="panel-collapse collapse">
                <div className="panel-body">
                   All user informations are protected and will not be revealed
                </div>
            </div>
        </div>

        <div className="faqHeader">Policy</div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Rules</a>
                </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                    ...
                </div>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Regulation</a>
                </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                    Admin has right to delete any post that contains:
                    <ul>
                        <li>Curse words</li>
                        <li>Threat</li>
                        <li>Nudity</li>
                        <li>Inappropriate content</li>
                        <li>No ADs</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="faqHeader">Users</div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">How can I contact you guys?</a>
                </h4>
            </div>
            <div id="collapseFour" className="panel-collapse collapse">
                <div className="panel-body">
                    email at: yerinlee90@gmail.com
                </div>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">Is this the latest version of the website?</a>
                </h4>
            </div>
            <div id="collapseSeven" className="panel-collapse collapse">
                <div className="panel-body">
                    At the current status, yes. It will be maintained and updated as needed.
                </div>
            </div>
        </div>
    </div>
</div>
      )
      }
    }

  export default Faq;