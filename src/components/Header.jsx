import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPrsupuesto,
    setIsValidPrsupuesto,
    gastos,
    setGastos,
}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPrsupuesto ? (
                <ControlPresupuesto
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    setIsValidPrsupuesto={setIsValidPrsupuesto}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPrsupuesto={setIsValidPrsupuesto}
                />
            )}
        </header>
    );
};

export default Header;
