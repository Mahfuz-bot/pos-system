### **POS System Application - Summary Report**

#### **Features Implemented**

1. **Login System**:

   - Dummy user data in `json-server`.
   - Credential validation with mock tokens stored in `localStorage`.

2. **Products Page**:

   - Static Site Generation (SSG) using `getStaticProps`.
   - Low stock products highlighted with conditional styling.
   - Incremental Static Regeneration (ISR) for data freshness.

3. **POS Page**:

   - Cart management with Context API.
   - Dynamic totals: quantity and item and final payable amount of total added products

4. **Styling and UX**:

   - TailwindCSS for responsive, clean design.
   - Loading and error states for better user feedback.

5. **Data Management**:
   - Products and users stored in `json-server`.
   - POS data handled fully on the frontend.

---

### **Tools and Libraries Used**

| **Tool/Library** | **Purpose**                                     |
| ---------------- | ----------------------------------------------- |
| **Next.js**      | Framework for building the app (SSG, CSR, ISR). |
| **React**        | Frontend library for UI components.             |
| **TailwindCSS**  | UI styling.                                     |
| **json-server**  | Mock backend for data fetching.                 |
| **useSWR**       | Client-side data fetching and caching.          |
| **Context API**  | State management for the cart.                  |

---

### **Final Workflow**

1. **Login**: Users authenticate using dummy credentials from `json-server`.
2. **Products Page**: Displays all products with their details and highlights low stock.
3. **POS Page**:
   - Users add products to the cart.
   - Dynamic calculations for added products.
   - Sale is processed,added on dummy.json and the cart is reset.

---

### **Strengths**

- **Performance**: Pre-rendered static pages ensure fast loading times.
- **Scalability**: ISR and client-side caching allow handling larger data efficiently.
- **Flexibility**: Handles both static and dynamic data seamlessly.
- **User-Friendly**: TailwindCSS and dynamic validation improve usability.
