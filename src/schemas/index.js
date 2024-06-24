import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6).required('Password is required')
});

export const truckSchema = Yup.object({
    truckName: Yup.string().required('Truck name is required'),
    fleetNumber: Yup.string().required('Fleet Number is required'),
    plateNumber: Yup.string().required('Plate Number is required'),
    deviceID: Yup.string().required('Device ID is required'),
    image: Yup.mixed()
      .required('Image is required')
      .test('fileFormat', 'Unsupported file format', (value) =>
        value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
      )
      .test('fileSize', 'File is too large', (value) =>
        value && value.size <= 1024 * 1024 // 1MB limit
      ),
  });

  export const addDriverSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    fleetNumber: Yup.string().required('Fleet number is required'),
    licenseExpirey: Yup.string().required('License Expirey is required'),
    phoneNumber: Yup.string().required('Phone number is required')
  }) 
  