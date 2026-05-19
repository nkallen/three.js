export default /* glsl */`
#ifdef USE_OCTAHEDRAL_NORMALS

	vec3 objectNormal = decodeOctahedralNormal( normalOctahedral );

#else

	vec3 objectNormal = vec3( normal );

#endif

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;
