import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function Input(props) {
    // const {post} = props;
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [textParagraph, setTextParagraph] = useState('');

    const causes = [
        'Reduce, Reuse, Recycle',
        'Conserving Water',
        'Saving Energy',
        'Protecting Wildlife',
        'Preserving Forests',
        'Promoting Sustainable Agriculture',
    ];

    const [selectedCause, setSelectedCause] = useState('');

    const handleCauseChange = (event) => {
        setSelectedCause(event.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API or process it as needed.
        console.log(formData);
        const newParagraph = `You selected: ${selectedCause}. You want to save ${formData.email} emissions.`;
        setTextParagraph(newParagraph);
    };
    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Typography variant="h4" gutterBottom>
                    How would you like to help the environment today?
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="sustainability-cause-label">Select a Cause</InputLabel>
                            <Select
                                labelId="sustainability-cause-label"
                                id="sustainability-cause"
                                value={selectedCause}
                                onChange={handleCauseChange}
                                label="Select a Cause"
                            >
                                {causes.map((cause, index) => (
                                    <MenuItem key={index} value={cause}>
                                        {cause}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            label="Number of emissions you will save today"
                            variant="outlined"
                            fullWidth
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit"  variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <p>{textParagraph}</p>
        </Container>
    );
}

Input.propTypes = {
    post: PropTypes.shape({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Input;