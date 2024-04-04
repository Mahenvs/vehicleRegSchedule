export interface tableProps {
    title: string;
}
export interface loginForm{
    userName: string;
    password: string;
    
}
export interface FormValues {
    name: string;
    userName: string;
    password: string;
    email: string;
    phoneNo: string;
    vehicleType: "car" | "bike";
    manufacturedYear: number;
    vehicleNum: string;
}

export interface FormFieldProps {
    label: string;
    id: string;
    name: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    maxLen?: number;
    placeholder: string
}

export interface scheduleType{
    username: string,
    vehicleType:string,
    scheduledDate: string,
    status: string
}
export interface valueType {
    userName : string,
    password : string
  }
