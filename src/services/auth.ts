export type Response = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

export function singIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'diefui384gut89w49483bkdkiq',
        user: {
          name: 'Renan',
          email: 'renan.dev@gmail.com',
        },
      });
    }, 2000);
  });
}
