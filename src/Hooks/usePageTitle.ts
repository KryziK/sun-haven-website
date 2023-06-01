import { useEffect } from "react";

const usePageTitle = (title: string) => {
    useEffect(() => {
        document.title = `${import.meta.env.VITE_APP_NAME} - ${title}`;
    }, [title]);
};

export default usePageTitle;