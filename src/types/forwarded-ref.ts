export type ForwardedRef<T extends React.ElementType<any>> = React.Ref<
  JSX.LibraryManagedAttributes<T, React.ComponentPropsWithRef<T>>
>
