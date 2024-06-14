import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6).required('Password is required')
});

export const truckSchema = Yup.object({
    truckName: Yup.string().required('Truck name is required'),
    fleetNumber: Yup.number().integer().required('Fleet Number is required'),
    plateNumber: Yup.number().integer().required('Plate Number is required'),
    status: Yup.string().required('Status is required'),
    driver: Yup.string().required('Driver is required'),
    lastUpdate: Yup.date().typeError('Invalid date format').required('Last Update is required'),
    deviceID: Yup.number().integer().required('Device ID is required'),
    image: Yup.mixed()
      .required('Image is required')
      .test('fileFormat', 'Unsupported file format', (value) =>
        value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
      )
      .test('fileSize', 'File is too large', (value) =>
        value && value.size <= 1024 * 1024 // 1MB limit
      ),
  });
  