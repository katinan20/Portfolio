/*

interface InputLabelProps {
  id: string;
  label?: string;
  required?: boolean;
  infos?: string;
}

const StyledLabel = styled('label')(({ }) => ({
  fontWeight: 'bold',
}));


export default function AtlInputLabel({
                                        label, id, required, infos
                                      }: InputLabelProps) {

  return (
      <>
        <StyledLabel htmlFor={id}>{label} <span className={'text-red-500'}>{required && '*'}</span> &nbsp;
          {
              infos &&
              <>
                <AtlInfoBulle content={infos} width={"250px"} />
              </>
          }
        </StyledLabel>
      </>
  );
}
*/
