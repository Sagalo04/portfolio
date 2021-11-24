import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { useMeasure, usePrevious } from './helpers.jsx'
import { Frame, Content, toggle, ico } from './styles'
import { Icon } from '@iconify/react'
import * as Icons from './icons'
import Styles from './Skills.module.scss'


function Skills(props) {
    function Tree({ children, name, style, open = false, iconi }) {
        const [isOpen, setOpen] = useState(open)
        const prev = usePrevious(isOpen)
        const [bind, { height: viewHeight }] = useMeasure()
        let { height, opacity, transform } = useSpring({
            from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
            to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
        })
        const Icona = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
        return (
            <>
                <Frame>
                    <Icon style={{ ...ico }} icon={iconi} color="#0094ff" height="24" />
                    <span onClick={() => setOpen(!isOpen)} style={{ verticalAlign: 'middle', marging: 0, ...style }}>
                        {name}
                    </span>
                    {<Icona style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />}
                    <Content
                        style={{ opacity, height: height.interpolate((height) => (isOpen && prev === isOpen ? 'auto' : height)) }}>
                        <animated.div style={{ transform }} {...bind}>
                            {children}
                        </animated.div>
                    </Content>
                </Frame>
            </>
        )
    }
    return (
        <div className>
            <h1 className={Styles.Title}>
                SKILLS
            </h1>
            <div>
                <div>
                    <Tree name="Lenguajes de programación" iconi="grommet-icons:console" style={{ fontSize: "1.2rem" }}>
                        <Tree name="Python" />
                        <Tree name="Java" />
                        <Tree name="Javascript" />
                        <Tree name="C#" />
                        <Tree name="Php" style={{ color: '#37ceff' }} />
                        <Tree name="TypeScript" style={{ color: '#37ceff' }} />
                        <Tree name="Matlab" style={{ color: '#37ceff' }} />
                        <Tree name="C++">
                            <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                                <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                            </div>
                        </Tree>
                        <Tree name="SQL" />
                        <Tree name="Dart" />
                    </Tree>
                    <Tree name="Desarrollo Web" iconi="ph:brackets-curly-bold" style={{ fontSize: "1.2rem" }}>
                        <Tree name="HTML 5" />
                        <Tree name="CSS" />
                        <Tree name="SASS" />
                        <Tree name="LESS" />
                        <Tree name="Node.Js" style={{ color: '#37ceff' }} />
                        <Tree name="Deno" style={{ color: '#37ceff' }} />
                        <Tree name="Api Rest" style={{ color: '#37ceff' }} />
                        <Tree name="AWS">
                            <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                                <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                            </div>
                        </Tree>
                        <Tree name="Github" />
                        <Tree
                            name={
                                <span>
                                    🙀
                                    something something
                                </span>
                            }
                        />
                    </Tree>
                    <Tree name="Frameworks / Bibliotecas" iconi="grommet-icons:console" style={{ fontSize: "1.2rem" }}>
                        <Tree name="Github" />
                        <Tree
                            name={
                                <span>
                                    🙀
                                    something something
                                </span>
                            }
                        />
                    </Tree>
                    <Tree name="Desarrollo de Videojuegos" iconi="grommet-icons:console" style={{ fontSize: "1.2rem" }}>
                        <Tree name="Github" />
                        <Tree
                            name={
                                <span>
                                    🙀
                                    something something
                                </span>
                            }
                        />
                    </Tree>
                    <Tree name="Bases de Datos" iconi="grommet-icons:console" style={{ fontSize: "1.2rem" }}>
                        <Tree name="Github" />
                        <Tree
                            name={
                                <span>
                                    🙀
                                    something something
                                </span>
                            }
                        />
                    </Tree>
                    <Tree name="Diseño Web" iconi="grommet-icons:console" style={{ fontSize: "1.2rem" }}>
                        <Tree name="Github" />
                        <Tree
                            name={
                                <span>
                                    🙀
                                    something something
                                </span>
                            }
                        />
                    </Tree>
                </div>
                <img src="" alt="" />
            </div>
        </div >
    );
}

export default Skills;