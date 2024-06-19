import { ToastUiProps } from "./Toast.type";

function ToastUi({ children }: ToastUiProps) {
  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded border bg-sky-200 p-4 text-base leading-6 text-white">
      {children}
    </div>
  );
}

export default ToastUi;
