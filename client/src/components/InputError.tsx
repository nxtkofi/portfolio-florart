import { useState, useRef, useEffect } from "react";

const InputError = ({
  error,
  touched,
}: {
  error?: string;
  touched?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (error && touched) {
      setIsVisible(true);
    } else if (!error && isVisible) {
      const element = errorRef.current;
      if (element) {
        const onTransitionEnd = () => setIsVisible(false);
        element.addEventListener("transitionend", onTransitionEnd);
        return () =>
          element.removeEventListener("transitionend", onTransitionEnd);
      }
    }
  }, [error, touched]);

  return (
    <div className="h-2 mb-6 mt-1">
      <p
        ref={errorRef}
        className={`text-red-500 text-sm transition-all duration-300 transform -mt-[1rem] ${
          isVisible && touched && error
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2"
        }`}
      >
        {error}
      </p>
    </div>
  );
};
export default InputError;
