import { ErrorIcon, RetryIcon } from '../icons';

import { ApiErrorContainer, Desc, ErrorButton, Head } from './api-error.styles';

export const ApiErrorFallback = () => {
  return (
    <ApiErrorContainer>
      <ErrorIcon width='30px' height='30px' />
      <Head>Something went wrong</Head>
      <Desc>
        We couldn't connect to the server (API error). Please try <br /> again in a few moments.
      </Desc>
      <ErrorButton tabIndex={0} onClick={() => window.location.reload()}>
        <RetryIcon width='16px' height='16px' /> Retry
      </ErrorButton>
    </ApiErrorContainer>
  );
};
