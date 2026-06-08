The app's left navigation rail (dark navy). Pass `items` with `{section}` dividers, an `active` id, and `header`/`footer` slots for the logo and user.

```jsx
<SidebarNav active={page} onSelect={setPage} header={<Logo/>}
  items={[{id:'dashboard',label:'Dashboard',icon:<Svg/>},{section:'Pipeline'},{id:'missions',label:'Missions',count:14,icon:<Svg/>}]} />
```
