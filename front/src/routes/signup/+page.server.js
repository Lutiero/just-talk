/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({request, params}) => {
      const data = await request.formData();
      const newUser = {
        nome: data.get('name'),
        email: data.get('email'),
        password: data.get('password')
      }

      
      
    }
  }