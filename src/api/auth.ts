import { AuthRequest } from "./../popup/store/@types/authRequest";
import { fetchToBackground } from "./_setting";

export const AuthApi = {
  login: async (email: string, password: string) => {
    return new Promise((resovle) => {
      fetchToBackground({
        path: "auth/login",
        data: { email, password },
        callback: (response) => {
          resovle(response);
        },
      });
    });
  },
  signup: async (authRequest: AuthRequest) => {
    return new Promise((resovle) => {
      fetchToBackground({
        path: "auth/signup",
        data: authRequest,
        callback: (response) => {
          resovle(response);
        },
      });
    });
  },

  checkEmail: async (
    email: string
  ): Promise<{ result: boolean; userName: string }> => {
    return new Promise((resovle) => {
      fetchToBackground({
        path: "auth/checkEmail",
        data: email,
        callback: (response) => {
          resovle(response);
        },
      });
    });
  },
};

export const BGAuthApi = {
  login: async (email, password) => {
    try {
      if (email === "test.com" && password === "qwer1234") {
        return new Promise((resolve) => {
          setTimeout(() => resolve(true), 300);
        });
      }
      return new Promise((resolve) => {
        setTimeout(() => resolve(false), 300);
      });
    } catch (error) {
      return false;
    }
  },
  signup: async (authRequest: AuthRequest) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => resolve(true), 300);
      });
    } catch (error) {
      return false;
    }
  },

  checkEmail: async (email: string) => {
    try {
      if (email === "test.com") {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              result: true,
              userName: "sungho",
            });
          }, 1000);
        });
      } else {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              result: false,
            });
          }, 1000);
        });
      }
    } catch (error) {
      return false;
    }
  },
};
