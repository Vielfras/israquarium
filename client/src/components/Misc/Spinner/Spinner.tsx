// Spinner.tsx

interface ISpinnerProps {
    message: string;
}

export default function Spinner({ message }: ISpinnerProps) {
    return (
        <div className="text-center">
            <svg className="animate-spin h-5 w-5 text-blue-500 mx-auto"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 100 8V4z" />
            </svg>
            <p>{message}</p>
        </div>
    );
}