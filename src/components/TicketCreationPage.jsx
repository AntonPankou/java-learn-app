import React, { useState, useEffect } from "react";
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
import { CATEGORIES_OPTIONS, URGENCY_OPTIONS } from "../constants/inputsValues";

function TicketCreationPage(props) {
  const [categoryValue, setCategoryValue] = useState('peopleManagement');
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [urgencyValue, setUrgencyValue] = useState('critical');
  const [resolutionDateValue, setResolutionDateValue] = useState('');
  const [attachmentValue, setAttachmentValue] = useState('');
  const [commentValue, setCommentValue] = useState('');

  useEffect(
    () => {
      // set request for getting ticket in draft state
      const ticketFromUrl = props.location.pathname.split("/");
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
    }, [])

  const handleCategoryChange = (event) => {
    setCategoryValue(event.target.value)
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value)
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleUrgencyChange = (event) => {
    setUrgencyValue(event.target.value)
  };

  const handleResolutionDate = (event) => {
    setResolutionDateValue(event.target.value);
  };

  const handleAttachmentChange = (event) => {
    setAttachmentValue(event.target.value);
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleSaveDraft = () => {
    // put change of status to draft here
    console.log("Save as draft");
  };

  const handleSubmitTicket = () => {
    // put submit logic here
    console.log("Submit");
  };

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
                onChange={handleNameChange}
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
                onChange={handleCategoryChange}
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
                onChange={handleUrgencyChange}
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
                onChange={handleResolutionDate}
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
                onChange={handleAttachmentChange}
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
              onChange={handleDescriptionChange}
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
              onChange={handleCommentChange}
            />
          </FormControl>
        </div>
        <section className="submit-button-section">
          <Button variant="contained" onClick={handleSaveDraft}>
            Save as Draft
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmitTicket}
            color="primary"
          >
            Submit
          </Button>
        </section>
      </div>
    </div>
  );
}

const TicketCreationPageWithRouter = withRouter(TicketCreationPage);
export default TicketCreationPageWithRouter;
