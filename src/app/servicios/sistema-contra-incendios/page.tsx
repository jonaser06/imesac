import {
  SistemaContraIncendiosDetail,
  MantenimientoAguaDetail,
} from "@/features/services/sistema-contra-incendios";

export default function SistemaContraIncendiosPage() {
  return (
    <>
      <SistemaContraIncendiosDetail />
      <MantenimientoAguaDetail />
    </>
  );
}
