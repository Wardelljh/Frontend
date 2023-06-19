
// import { Form, Input, ButtonToolbar, Button } from 'rsuite';
// import React from 'react';
// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

// const Registration = () => (
//   <Form layout="horizontal">
//     <Form.Group controlId="name-6">
//       <Form.ControlLabel>Username</Form.ControlLabel>
//       <Form.Control name="name" />
//       <Form.HelpText>Required</Form.HelpText>
//     </Form.Group>
//     <Form.Group controlId="email-6">
//       <Form.ControlLabel>Email</Form.ControlLabel>
//       <Form.Control name="email" type="email" />
//       <Form.HelpText tooltip>Required</Form.HelpText>
//     </Form.Group>
//     <Form.Group controlId="password-6">
//       <Form.ControlLabel>Password</Form.ControlLabel>
//       <Form.Control name="password" type="password" autoComplete="off" />
//     </Form.Group>
//     <Form.Group controlId="textarea-6">
//       <Form.ControlLabel>Textarea</Form.ControlLabel>
//       <Form.Control name="textarea" rows={5} accepter={Textarea} />
//     </Form.Group>
//     <Form.Group>
//       <ButtonToolbar>
//         <Button appearance="primary">Submit</Button>
//         <Button appearance="default">Cancel</Button>
//       </ButtonToolbar>
//     </Form.Group>
//   </Form>
// );

// export default Registration;


// import React from 'react';
// import { Form, Input, ButtonToolbar, Button } from 'rsuite';

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

// const Registration = () => (
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//     <Form layout="horizontal">
//       <Form.Group controlId="name-6">
//         <Form.ControlLabel>Student Name</Form.ControlLabel>
//         <Form.Control name="name" />
//         <Form.HelpText>Required</Form.HelpText>
//       </Form.Group>
//       <Form.Group controlId="registration-number-6">
//         <Form.ControlLabel>Registration Number</Form.ControlLabel>
//         <Form.Control name="registrationNumber" />
//         <Form.HelpText>Required</Form.HelpText>
//       </Form.Group>
//       <Form.Group controlId="email-6">
//         <Form.ControlLabel>Email</Form.ControlLabel>
//         <Form.Control name="email" type="email" />
//         <Form.HelpText tooltip>Required</Form.HelpText>
//       </Form.Group>
//       <Form.Group controlId="student-year-6">
//         <Form.ControlLabel>Student Year</Form.ControlLabel>
//         <Form.Control name="studentYear" />
//         <Form.HelpText>Required</Form.HelpText>
//       </Form.Group>
//       <Form.Group controlId="program-6">
//         <Form.ControlLabel>Program</Form.ControlLabel>
//         <Form.Control name="program" />
//         <Form.HelpText>Required</Form.HelpText>
//       </Form.Group>
//       <Form.Group>
//         <ButtonToolbar>
//           <Button appearance="primary">Submit</Button>
//           <Button appearance="default">Cancel</Button>
//         </ButtonToolbar>
//       </Form.Group>
//     </Form>
//   </div>
// );

// export default Registration;

// import React from 'react';
// import { Form, Input, ButtonToolbar, Button } from 'rsuite';

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

// const Registration = () => (
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//     <div style={{ border: '1px solid #ccc', padding: '20px' }}>
//       <Form layout="horizontal">
//         <Form.Group controlId="name-6">
//           <Form.ControlLabel>Student Name</Form.ControlLabel>
//           <Form.Control name="name" />
//           <Form.HelpText>Required</Form.HelpText>
//         </Form.Group>
//         <Form.Group controlId="registration-number-6">
//           <Form.ControlLabel>Registration Number</Form.ControlLabel>
//           <Form.Control name="registrationNumber" />
//           <Form.HelpText>Required</Form.HelpText>
//         </Form.Group>
//         <Form.Group controlId="email-6">
//           <Form.ControlLabel>Email</Form.ControlLabel>
//           <Form.Control name="email" type="email" />
//           <Form.HelpText tooltip>Required</Form.HelpText>
//         </Form.Group>
//         <Form.Group controlId="student-year-6">
//           <Form.ControlLabel>Student Year</Form.ControlLabel>
//           <Form.Control name="studentYear" />
//           <Form.HelpText>Required</Form.HelpText>
//         </Form.Group>
//         <Form.Group controlId="program-6">
//           <Form.ControlLabel>Program</Form.ControlLabel>
//           <Form.Control name="program" />
//           <Form.HelpText>Required</Form.HelpText>
//         </Form.Group>
//         <Form.Group>
//           <ButtonToolbar>
//             <Button appearance="primary">Submit</Button>
//             <Button appearance="default">Cancel</Button>
//           </ButtonToolbar>
//         </Form.Group>
//       </Form>
//     </div>
//   </div>
// );

// export default Registration;

//ya juuuuuu


// import React from 'react';
// import { Form, Input, ButtonToolbar, Button } from 'rsuite';

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

// const Registration = () => {
//   const registrationNumberRegex = /^[A-Z]+\/\d+\/\d+\/\d+\/TZ$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const validateRegistrationNumber = (value) => {
//     if (!registrationNumberRegex.test(value)) {
//       return {
//         hasError: true,
//         errorMessage: 'Invalid registration number. Please follow the format: BCS/16/21/0014/TZ',
//       };
//     }
//     return null;
//   };

//   const validateEmail = (value) => {
//     if (!emailRegex.test(value)) {
//       return {
//         hasError: true,
//         errorMessage: 'Invalid email address',
//       };
//     }
//     return null;
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div style={{ border: '1px solid #ccc', padding: '20px' }}>
//         <Form layout="horizontal">
//           <Form.Group controlId="name-6">
//             <Form.ControlLabel>Student Name</Form.ControlLabel>
//             <Form.Control name="name" required />
//             <Form.HelpText>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group controlId="registration-number-6">
//             <Form.ControlLabel>Registration Number</Form.ControlLabel>
//             <Form.Control
//               name="registrationNumber"
//               checkTrigger="blur"
//               errorPlacement="bottomEnd"
//               errorMessage="Invalid registration number"
//               validate={validateRegistrationNumber}
//               required
//             />
//             <Form.HelpText tooltip>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group controlId="email-6">
//             <Form.ControlLabel>Email</Form.ControlLabel>
//             <Form.Control
//               name="email"
//               type="email"
//               checkTrigger="blur"
//               errorPlacement="bottomEnd"
//               errorMessage="Invalid email address"
//               validate={validateEmail}
//               required
//             />
//             <Form.HelpText tooltip>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group controlId="student-year-6">
//             <Form.ControlLabel>Student Year</Form.ControlLabel>
//             <Form.Control name="studentYear" required />
//             <Form.HelpText>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group controlId="program-6">
//             <Form.ControlLabel>Program</Form.ControlLabel>
//             <Form.Control name="program" required />
//             <Form.HelpText>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group>
//             <ButtonToolbar>
//               <Button appearance="primary">Submit</Button>
//               <Button appearance="default">Cancel</Button>
//             </ButtonToolbar>
//           </Form.Group>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Registration;
//WITH VALIDATION
// import React, { useState } from 'react';
// import { Form, Input, ButtonToolbar, Button } from 'rsuite';

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

// const Registration = () => {
//   const registrationNumberRegex = /^[A-Z]+\/\d+\/\d+\/\d+\/TZ$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const [formErrors, setFormErrors] = useState({});

//   const validateRegistrationNumber = (value) => {
//     if (!registrationNumberRegex.test(value)) {
//       return {
//         hasError: true,
//         errorMessage: 'Invalid registration number. Please follow the format: BCS/16/21/0014/TZ',
//       };
//     }
//     return null;
//   };

//   const validateEmail = (value) => {
//     if (!emailRegex.test(value)) {
//       return {
//         hasError: true,
//         errorMessage: 'Invalid email address',
//       };
//     }
//     return null;
//   };

//   const handleSubmit = (formData) => {
//     const errors = {};
//     let isValid = true;

//     // Perform validation for each field
//     if (!formData.name) {
//       errors.name = 'Name is required';
//       isValid = false;
//     }

//     if (!formData.registrationNumber) {
//       errors.registrationNumber = 'Registration number is required';
//       isValid = false;
//     } else {
//       const registrationNumberError = validateRegistrationNumber(formData.registrationNumber);
//       if (registrationNumberError) {
//         errors.registrationNumber = registrationNumberError.errorMessage;
//         isValid = false;
//       }
//     }

//     if (!formData.email) {
//       errors.email = 'Email is required';
//       isValid = false;
//     } else {
//       const emailError = validateEmail(formData.email);
//       if (emailError) {
//         errors.email = emailError.errorMessage;
//         isValid = false;
//       }
//     }

//     if (!formData.studentYear) {
//       errors.studentYear = 'Student year is required';
//       isValid = false;
//     }

//     if (!formData.program) {
//       errors.program = 'Program is required';
//       isValid = false;
//     }

//     // Update the form errors state
//     setFormErrors(errors);

//     if (isValid) {
//       // Perform form submission
//       // ...
//       console.log('Form submitted successfully!');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div style={{ border: '1px solid #ccc', padding: '20px' }}>
//         <Form layout="horizontal" onSubmit={handleSubmit}>
//           <Form.Group controlId="name-6">
//             <Form.ControlLabel>Student Name</Form.ControlLabel>
//             <Form.Control name="name" required />
//             {formErrors.name && <Form.ErrorBlock>{formErrors.name}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group controlId="registration-number-6">
//             <Form.ControlLabel>Registration Number</Form.ControlLabel>
//             <Form.Control
//               name="registrationNumber"
//               checkTrigger="blur"
//               errorPlacement="bottomEnd"
//               errorMessage="Invalid registration number"
//               validate={validateRegistrationNumber}
//               required
//             />
//             {formErrors.registrationNumber && <Form.ErrorBlock>{formErrors.registrationNumber}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group controlId="email-6">
//             <Form.ControlLabel>Email</Form.ControlLabel>
//             <Form.Control
//               name="email"
//               type="email"
//               checkTrigger="blur"
//               errorPlacement="bottomEnd"
//               errorMessage="Invalid email address"
//               validate={validateEmail}
//               required
//             />
//             {formErrors.email && <Form.ErrorBlock>{formErrors.email}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group controlId="student-year-6">
//             <Form.ControlLabel>Student Year</Form.ControlLabel>
//             <Form.Control name="studentYear" required />
//             {formErrors.studentYear && <Form.ErrorBlock>{formErrors.studentYear}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group controlId="program-6">
//             <Form.ControlLabel>Program</Form.ControlLabel>
//             <Form.Control name="program" required />
//             {formErrors.program && <Form.ErrorBlock>{formErrors.program}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group>
//             <ButtonToolbar>
//               <Button appearance="primary" type="submit">Submit</Button>
//               <Button appearance="default">Cancel</Button>
//             </ButtonToolbar>
//           </Form.Group>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Registration;

// WITH BACKEND
// import React, { useState } from 'react';
// import { Form, Input, ButtonToolbar, Button } from 'rsuite';
// import axios from 'axios';

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

// const Registration = () => {
//   const registrationNumberRegex = /^[A-Z]+\/\d+\/\d+\/\d+\/TZ$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const [formErrors, setFormErrors] = useState({});

//   const validateRegistrationNumber = (value) => {
//     if (!registrationNumberRegex.test(value)) {
//       return {
//         hasError: true,
//         errorMessage: 'Invalid registration number. Please follow the format: BCS/16/21/0014/TZ',
//       };
//     }
//     return null;
//   };

//   const validateEmail = (value) => {
//     if (!emailRegex.test(value)) {
//       return {
//         hasError: true,
//         errorMessage: 'Invalid email address',
//       };
//     }
//     return null;
//   };

//   const handleSubmit = async (formData) => {
//     const errors = {};
//     let isValid = true;

//     // Perform validation for each field
//     if (!formData.name) {
//       errors.name = 'Name is required';
//       isValid = false;
//     }

//     if (!formData.registrationNumber) {
//       errors.registrationNumber = 'Registration number is required';
//       isValid = false;
//     } else {
//       const registrationNumberError = validateRegistrationNumber(formData.registrationNumber);
//       if (registrationNumberError) {
//         errors.registrationNumber = registrationNumberError.errorMessage;
//         isValid = false;
//       }
//     }

//     if (!formData.email) {
//       errors.email = 'Email is required';
//       isValid = false;
//     } else {
//       const emailError = validateEmail(formData.email);
//       if (emailError) {
//         errors.email = emailError.errorMessage;
//         isValid = false;
//       }
//     }

//     if (!formData.studentYear) {
//       errors.studentYear = 'Student year is required';
//       isValid = false;
//     }

//     if (!formData.program) {
//       errors.program = 'Program is required';
//       isValid = false;
//     }

//     // Update the form errors state
//     setFormErrors(errors);

//     if (isValid) {
//       try {
//         // Send an HTTP POST request to the backend API endpoint
//         await axios.post('/api/students', formData);
//         console.log('Form submitted successfully!');
//         // Reset the form
//         setFormErrors({});
//       } catch (error) {
//         console.error('Error submitting the form:', error);
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div style={{ border: '1px solid #ccc', padding: '20px' }}>
//         <Form layout="horizontal" onSubmit={handleSubmit}>
//           <Form.Group controlId="name-6">
//             <Form.ControlLabel>Student Name</Form.ControlLabel>
//             <Form.Control name="name" required />
//             {formErrors.name && <Form.ErrorBlock>{formErrors.name}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group controlId="registration-number-6">
//             <Form.ControlLabel>Registration Number</Form.ControlLabel>
//             <Form.Control
//               name="registrationNumber"
//               checkTrigger="blur"
//               errorPlacement="bottomEnd"
//               errorMessage="Invalid registration number"
//               validate={validateRegistrationNumber}
//               required
//             />
//             {formErrors.registrationNumber && <Form.ErrorBlock>{formErrors.registrationNumber}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group controlId="email-6">
//             <Form.ControlLabel>Email</Form.ControlLabel>
//             <Form.Control
//               name="email"
//               type="email"
//               checkTrigger="blur"
//               errorPlacement="bottomEnd"
//               errorMessage="Invalid email address"
//               validate={validateEmail}
//               required
//             />
//             {formErrors.email && <Form.ErrorBlock>{formErrors.email}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group controlId="student-year-6">
//             <Form.ControlLabel>Student Year</Form.ControlLabel>
//             <Form.Control name="studentYear" required />
//             {formErrors.studentYear && <Form.ErrorBlock>{formErrors.studentYear}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group controlId="program-6">
//             <Form.ControlLabel>Program</Form.ControlLabel>
//             <Form.Control name="program" required />
//             {formErrors.program && <Form.ErrorBlock>{formErrors.program}</Form.ErrorBlock>}
//           </Form.Group>
//           <Form.Group>
//             <ButtonToolbar>
//               <Button appearance="primary" type="submit">Submit</Button>
//               <Button appearance="default">Cancel</Button>
//             </ButtonToolbar>
//           </Form.Group>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Registration;

// import React, { useState } from 'react';
// import { Form, Input, ButtonToolbar, Button } from 'rsuite';

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     registrationNumber: '',
//     email: '',
//     studentYear: '',
//     program: ''
//   });

//   const handleChange = (name, value) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send the form data to the backend
//     fetch('/api/registration', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Handle successful form submission
//           console.log('Form submitted successfully');
//           // Reset the form fields if needed
//           setFormData({
//             name: '',
//             registrationNumber: '',
//             email: '',
//             studentYear: '',
//             program: ''
//           });
//         } else {
//           // Handle form submission error
//           console.log('Error submitting the form');
//         }
//       })
//       .catch((error) => {
//         // Handle any network or server error
//         console.log('Error:', error);
//       });
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div style={{ border: '1px solid #ccc', padding: '20px' }}>
//         <Form layout="horizontal" onSubmit={handleSubmit}>
//           <Form.Group controlId="name-6">
//             <Form.ControlLabel>Student Name</Form.ControlLabel>
//             <Form.Control name="name" value={formData.name} onChange={(value) => handleChange('name', value)} />
//             <Form.HelpText>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group controlId="registration-number-6">
//             <Form.ControlLabel>Registration Number</Form.ControlLabel>
//             <Form.Control
//               name="registrationNumber"
//               value={formData.registrationNumber}
//               onChange={(value) => handleChange('registrationNumber', value)}
//             />
//             <Form.HelpText>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group controlId="email-6">
//             <Form.ControlLabel>Email</Form.ControlLabel>
//             <Form.Control name="email" type="email" value={formData.email} onChange={(value) => handleChange('email', value)} />
//             <Form.HelpText tooltip>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group controlId="student-year-6">
//             <Form.ControlLabel>Student Year</Form.ControlLabel>
//             <Form.Control
//               name="studentYear"
//               value={formData.studentYear}
//               onChange={(value) => handleChange('studentYear', value)}
//             />
//             <Form.HelpText>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group controlId="program-6">
//             <Form.ControlLabel>Program</Form.ControlLabel>
//             <Form.Control
//               name="program"
//               value={formData.program}
//               onChange={(value) => handleChange('program', value)}
//             />
//             <Form.HelpText>Required</Form.HelpText>
//           </Form.Group>
//           <Form.Group>
//             <ButtonToolbar>
//               <Button appearance="primary" type="submit">
//                 Submit
//               </Button>
//               <Button appearance="default">Cancel</Button>
//             </ButtonToolbar>
//           </Form.Group>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Registration;
///iyo last error

import React, { useState } from 'react';
import { Form, Input, ButtonToolbar, Button } from 'rsuite';

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    email: '',
    studentYear: '',
    program: ''
  });

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
  
    // Send the form data to the backend
    fetch('/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful form submission
          console.log('Form submitted successfully');
          // Reset the form fields if needed
          setFormData({
            name: '',
            registrationNumber: '',
            email: '',
            studentYear: '',
            program: ''
          });
        } else {
          // Handle form submission error
          console.log('Error submitting the form');
        }
      })
      .catch((error) => {
        // Handle any network or server error
        console.log('Error:', error);
      });
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <Form layout="horizontal" onSubmit={handleSubmit}>
          <Form.Group controlId="name-6">
            <Form.ControlLabel>Student Name</Form.ControlLabel>
            <Form.Control name="name" value={formData.name} onChange={(value) => handleChange('name', value)} />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="registration-number-6">
            <Form.ControlLabel>Registration Number</Form.ControlLabel>
            <Form.Control
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={(value) => handleChange('registrationNumber', value)}
            />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="email-6">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email" value={formData.email} onChange={(value) => handleChange('email', value)} />
            <Form.HelpText tooltip>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="student-year-6">
            <Form.ControlLabel>Student Year</Form.ControlLabel>
            <Form.Control
              name="studentYear"
              value={formData.studentYear}
              onChange={(value) => handleChange('studentYear', value)}
            />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="program-6">
            <Form.ControlLabel>Program</Form.ControlLabel>
            <Form.Control
              name="program"
              value={formData.program}
              onChange={(value) => handleChange('program', value)}
            />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" type="submit">
                Submit
              </Button>
              <Button appearance="default">Cancel</Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
