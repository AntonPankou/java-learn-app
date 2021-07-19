import React from "react";
import {
  Button,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { ALL_TICKETS } from "../constants/mockTickets";
import { CATEGORIES_OPTIONS, URGENCY_OPTIONS  } from "../constants/inputsValues";
class TicketCreationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryValue: 'peopleManagement',
      nameValue: "",
      descriptionValue: "",
      urgencyValue: "critical",
      resolutionDateValue: "",
      attachmentValue: "",
      commentValue: "",
    };
  }

  componentDidMount() {
    const ticketFromUrl = this.props.location.pathname.split("/");
    const ticketId = ticketFromUrl[ticketFromUrl.length - 1];
    const ticketData = ALL_TICKETS.find((item) => item.id === +ticketId);

    if (ticketData) {
      this.setState({
        nameValue: ticketData.name,
        resolutionDateValue: ticketData.date,
        commentValue: ticketData.comment,
        descriptionValue: ticketData.description,
        urgencyValue: ticketData.urgency,
        categoryValue: ticketData.category
      });
    }
  }

  handleCategoryChange = (event) => {
    this.setState({
      categoryValue: event.target.value,
    });
  };

  handleNameChange = (event) => {
    this.setState({
      nameValue: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      descriptionValue: event.target.value,
    });
  };

  handleUrgencyChange = (event) => {
    this.setState({
      urgencyValue: event.target.value,
    });
  };

  handleResolutionDate = (event) => {
    this.setState({
      resolutionDateValue: event.target.value,
    });
  };

  handleAttachmentChange = (event) => {
    this.setState({
      attachmentValue: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      commentValue: event.target.value,
    });
  };

  handleSaveDraft = () => {
    console.log("Save as draft");
  };

  handleSubmitTicket = () => {
    console.log("Submit");
  };

  render() {
    const {
      nameValue,
      attachmentValue,
      categoryValue,
      commentValue,
      descriptionValue,
      resolutionDateValue,
      urgencyValue,
    } = this.state;

    console.log("props from render", this.props);

    return (
      <div className="ticket-creation-form-container">
        <header className="ticket-creation-form-container__navigation-container">
          <Button component={Link} to="/main-page" variant="contained">
            Ticket List
          </Button>
        </header>
        <div className="ticket-creation-form-container__title">
          <Typography display="block" variant="h3">
            Create new ticket
          </Typography>
        </div>
        <div className="ticket-creation-form-container__form">
          <div className="inputs-section">
            <div className="ticket-creation-form-container__inputs-section inputs-section__ticket-creation-input ticket-creation-input ticket-creation-input_width200">
              <FormControl>
                <TextField
                  required
                  label="Name"
                  variant="outlined"
                  onChange={this.handleNameChange}
                  id="name-label"
                  value={nameValue}
                />
              </FormControl>
            </div>
            <div className="inputs-section__ticket-creation-input ticket-creation-input ticket-creation-input_width200">
              <FormControl variant="outlined" required>
                <InputLabel shrink htmlFor="category-label">
                  Category
                </InputLabel>
                <Select
                  value={categoryValue}
                  label="Category"
                  onChange={this.handleCategoryChange}
                  inputProps={{
                    name: "category",
                    id: "category-label",
                  }}
                >
                  {CATEGORIES_OPTIONS.map((item, index) => {
                    return (
                      <MenuItem value={item.value} key={index}>
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="inputs-section__ticket-creation-input ticket-creation-input">
              <FormControl variant="outlined" required>
                <InputLabel shrink htmlFor="urgency-label">
                  Urgency
                </InputLabel>
                <Select
                  value={urgencyValue}
                  label="Urgency"
                  onChange={this.handleUrgencyChange}
                  className={"ticket-creation-input_width200"}
                  inputProps={{
                    name: "urgency",
                    id: "urgency-label",
                  }}
                >
                  {URGENCY_OPTIONS.map((item, index) => {
                    return (
                      <MenuItem value={item.value} key={index}>
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="inputs-section-attachment">
            <div className="inputs-section__ticket-creation-input ticket-creation-input ticket-creation-input_width200">
              <FormControl>
                <InputLabel shrink htmlFor="urgency-label">
                  Desired resolution date
                </InputLabel>
                <TextField
                  onChange={this.handleResolutionDate}
                  label="Desired resolution date"
                  type="date"
                  id="resolution-date"
                  value={resolutionDateValue}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </div>
            <div className="ticket-creation-input">
              <FormControl>
                <Typography variant="caption">Add attachment</Typography>
                <TextField
                  type="file"
                  variant="outlined"
                  onChange={this.handleAttachmentChange}
                  value={attachmentValue}
                />
              </FormControl>
            </div>
          </div>

          <div className="inputs-section">
            <FormControl>
              <TextField
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                value={descriptionValue}
                className="creation-text-field creation-text-field_width680"
                onChange={this.handleDescriptionChange}
              />
            </FormControl>
          </div>
          <div className="inputs-section">
            <FormControl>
              <TextField
                label="Comment"
                multiline
                rows={4}
                variant="outlined"
                value={commentValue}
                className="creation-text-field creation-text-field_width680"
                onChange={this.handleCommentChange}
              />
            </FormControl>
          </div>
          <section className="submit-button-section">
            <Button variant="contained" onClick={this.handleSaveDraft}>
              Save as Draft
            </Button>
            <Button
              variant="contained"
              onClick={this.handleSubmitTicket}
              color="primary"
            >
              Submit
            </Button>
          </section>
        </div>
      </div>
    );
  }
}

const TicketCreationPageWithRouter = withRouter(TicketCreationPage);
export default TicketCreationPageWithRouter;
